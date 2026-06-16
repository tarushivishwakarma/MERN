const marker={
    name:"Camlin",
    price:50,
    model:456,
    color:"red",
    use:"permanent"
}
console.log(marker)
console.log(marker.model)
delete marker.color
console.log(marker)
marker.price=70
marker.model="SA456"
console.log(marker)