"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
const data_source_1 = require("./data-source");
const User_1 = require("../models/User");
const profiles_1 = require("./profiles");
const AppRole_1 = require("../models/AppRole");
const appRoles_1 = require("./appRoles");
require("dotenv/config");
async function seed() {
    const dataSource = await data_source_1.AppDataSource.initialize();
    const appRoleRepo = dataSource.getRepository(AppRole_1.AppRole);
    const existingRoles = await appRoleRepo.find({
        where: { name: (0, typeorm_1.In)(appRoles_1.default) },
    });
    const existingRoleNames = new Set(existingRoles.map((r) => r.name));
    for (const roleName of appRoles_1.default) {
        if (!existingRoleNames.has(roleName)) {
            const appRole = appRoleRepo.create({ name: roleName });
            await appRoleRepo.save(appRole);
            console.log(`Created role: ${roleName}`);
        }
    }
    const userRepo = dataSource.getRepository(User_1.User);
    const profileEmails = profiles_1.default.map((p) => p.email);
    const existingUsers = await userRepo.find({
        where: { email: (0, typeorm_1.In)(profileEmails) },
    });
    const existingUserEmails = new Set(existingUsers.map((u) => u.email));
    for (const profile of profiles_1.default) {
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
//# sourceMappingURL=seed.js.map