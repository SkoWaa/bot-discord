

const { ShardingManager } = require('discord.js');

// Create your ShardingManger instance
const manager = new ShardingManager('./index.js', {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/v12/class/ShardingManager
    totalShards: 'auto',
    token: 'NzIzMjc1ODA3OTg3ODU5NTA2.XuvRFg.znJAheiC9T5r9NdosVwoSIxGq50'
});

// Spawn your shards
manager.spawn();

// Emitted when a shard is created
manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));