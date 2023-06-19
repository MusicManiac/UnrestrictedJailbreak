import { DependencyContainer } from "tsyringe";
import { Ilogger } from "@spt-aki/models/spt/utils/Ilogger";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class LessRestrictingHelmets implements IPostDBLoadMod
{
	public postDBLoad(container: DependencyContainer): void 
	{
		// Get the logger from the server container.
		const logger = container.resolve<Ilogger>("WinstonLogger");
		// Get database from server.
		const db = container.resolve<DatabaseServer>("DatabaseServer");
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
}

module.exports = { mod: new LessRestrictingHelmets() }