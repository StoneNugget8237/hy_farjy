import { EquipmentSlot, ItemStack, world, system } from "@minecraft/server";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imatationtoolusing(player,itemStack,itemName){
  const tooldamageamount=randomInteger(1, 10);
  if (tooldamageamount>=5){
    player.sendMessage(`这把${itemName}§r还是无法与真品媲美...`)
  }
  const durability=itemStack.getComponent("minecraft:durability");
  durability.damage += tooldamageamount;
  return itemStack;
}

world.afterEvents.entityHitEntity.subscribe((event)=>{
  const player=event.damagingEntity
  const item=player.getComponent("minecraft:equippable").getEquipment(EquipmentSlot.Mainhand)
  system.run(()=>{
    switch(item.typeId){
      case "hy_farjy:stable_iames":
        var result=imatationtoolusing(player, item, "§d『稳定的仿制紫水晶剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_ids":
        var result=imatationtoolusing(player, item, "§b『稳定的仿制钻石剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_igs":
        var result=imatationtoolusing(player, item, "§e『稳定的仿制黄金剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_iis":
        var result=imatationtoolusing(player, item, "§7『稳定的仿制铁剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_iameaxe":
        var result=imatationtoolusing(player, item, "§d『稳定的仿制紫水晶斧』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_idaxe":
        var result=imatationtoolusing(player, item, "§b『稳定的仿制钻石斧』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_igaxe":
        var result=imatationtoolusing(player, item, "§e『稳定的仿制黄金斧』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_iiaxe":
        var result=imatationtoolusing(player, item, "§7『稳定的仿制铁斧』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
    }
  })
})


