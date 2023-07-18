export const menuSlide ={
    initial:{
        x:"100%"
    },
    enter:{
        x:"0%",
        transition:{duration: 0.8,ease:[0.75,0,0.24,1]}
    },
    exit:{
        x:"100%",
        transition:{duration: 0.8,ease:[0.75,0,0.24,1]}
    }
}
export const slide ={
    initial:{
        x:"80%"
    },
    enter: (i:any)=>({
        x:"0%",
        transition:{duration: 0.8,ease:[0.75,0,0.24,i]}
    }),
    exit:(i:any)=>({
        x:"80%",
        transition:{duration: 0.8,ease:[0.75,0,0.24,i]}
    }),
}

export const scale ={
    initial:{
        x:"0%"
    },
    enter:{
        x:"0%",
        transition:{duration: 0.8,ease:[0.75,0,0.24,1]}
    },
    exit:{
        x:"0%",
        transition:{duration: 0.8,ease:[0.75,0,0.24,1]}
    }
}