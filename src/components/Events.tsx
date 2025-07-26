const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];


const Events=events.map((i)=>{


  return(<>
  
  <div key={i.id} className="notification w-full">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>


          <div className="flex justify-between relative ">
              <div className="notititle">{i.title}</div>
             
              <div className="text-white top-2 bg-[#29292c] text-sm p-1 rounded-md right-3 absolute z-30">{i.time}</div> 
            
        
</div>

          <div className="notibody">{i.description}</div>
        </div>
     
  </>

)


})

export default Events;