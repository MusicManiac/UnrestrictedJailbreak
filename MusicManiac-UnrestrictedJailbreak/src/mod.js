"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LessRestrictingHelmets {
    postDBLoad(container) {
        // Get the logger from the server container.
        const logger = container.resolve("WinstonLogger");
        // Get database from server.
        const db = container.resolve("DatabaseServer");
        // Get tables from database
        const tables = db.getTables();
        // Get item database from tables
        const itemDB = tables.templates.items;
        for (let item in itemDB) {
            // find Jailbreak
            if (itemDB[item]._id == "5c78f2882e22165df16b832e") {
                itemDB[item]._props.ConflictingItems.length = 0;
                logger.info("MusicManiac - Unrestricted Jailbreak Loaded");
            }
        }
    }
}
module.exports = { mod: new LessRestrictingHelmets() };
