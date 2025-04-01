// Color Function for Restaurant Item
export var colorFunc = (val)=>{
    if(val > 4){
        // return 'rgb(255,0,0)';
        return 'rgb(0, 200, 0)';
    }
    else if(3 < val && val <= 4){
        return 'rgb(217, 238, 31)';
    }
    else if( 2 < val && val<=3 ){
        return 'rgb(253, 201, 30)';
    }
    else{
        return 'rgb(255,0,0)';
    }
}

