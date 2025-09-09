import { DataSource, In } from "typeorm";
import * as bcrypt from "bcryptjs";
import { AppDataSource } from "./data-source";
import { User } from "../models/User";
import profiles from "./profiles";
import { AppRole } from "../models/AppRole";
import appRoles from "./appRoles";
import "dotenv/config";

async function seed() {
  const dataSource: DataSource = await AppDataSource.initialize();

  //GENERATE DEFAULT APP ROLES
  const appRoleRepo = dataSource.getRepository(AppRole);

  const existingRoles = await appRoleRepo.find({
    where: { name: In(appRoles) },
  });
  const existingRoleNames = new Set(existingRoles.map((r) => r.name));

  for (const roleName of appRoles) {
    if (!existingRoleNames.has(roleName)) {
      const appRole = appRoleRepo.create({ name: roleName });
      await appRoleRepo.save(appRole);
      console.log(`Created role: ${roleName}`);
    }
  }

  //GENERATE DEFAULT PROFILES
  const userRepo = dataSource.getRepository(User);

  const profileEmails = profiles.map((p) => p.email);
  const existingUsers = await userRepo.find({
    where: { email: In(profileEmails) },
  });
  const existingUserEmails = new Set(existingUsers.map((u) => u.email));

  for (const profile of profiles) {
    if (!existingUserEmails.has(profile.email)) {
      const password = await bcrypt.hash(profile.password, 10);

      const user = userRepo.create({
        email: profile.email,
        appRole: profile.appRole,
        password,
        firstName: profile.firstName,
        lastName: profile.lastName,
      });

      await userRepo.save(user);
      console.log(`Created user: ${profile.email}`);
    }
  }

  await dataSource.destroy();
}

seed();
//docker compose exec backend npx ts-node src/db_scripts/seed.ts
