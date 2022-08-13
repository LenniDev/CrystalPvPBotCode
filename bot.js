const mineflayer = require('mineflayer');
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear, GoalFollow} = require('mineflayer-pathfinder').goals
Vec3 = require('vec3');

const bot = mineflayer.createBot({
    host: 'localhost', // minecraft server ip
    port: 46091,
    username: 'bot'
})
target='LordLenno';

bot.loadPlugin(pathfinder)
bot.once('spawn', () => {
    const mcData = require('minecraft-data')(bot.version)
    const defaultMove = new Movements(bot, mcData)
});
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}


async function pvp(){
    const player = bot.players[target].entity
    let walkToPlayerMode = false;
    let goal = new GoalFollow(player, -1)
    bot.pathfinder.setGoal(goal,true);
    while(true){
        // y_distance = player.position.y - bot.entity.position.y;
        // distance = bot.entity.position.distanceTo(player.position);
        // if(distance>2.5){
        // }else{
        //     if(walkToPlayerMode){
        //         bot.chat('walkstop')
        //         bot.pathfinder.stop();
        //     }
        // }
    } 
}


bot.on("chat",(user,message)=>{
    if(message=="pvp"){
        pvp();
    }
})
