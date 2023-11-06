import React from "react";
import Skeleton from '@mui/material/Skeleton';
import "./style.css"

export function CardSkeletoon(){
    return(
        <div className="skeletoon">
            <div className="flex divSkeletonTitle">
                <Skeleton variant="rectangular" className="skeletoonLoad" animation="wave" width="40%" height={40} />
                <Skeleton variant="rectangular" className="skeletoonLoad" animation="wave" width="15%" height={40} />
            </div>
            <Skeleton variant="rectangular" className="skeletoonLoad" animation="wave" width="95%" height={140} />
        </div>
    )
}