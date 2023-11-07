import React from "react";
import Skeleton from '@mui/material/Skeleton';
import "./style.css"

export function CardSkeletoon(){
    return(
        <div className="skeletoon">
            <div className="flex divSkeletonTitle">
                <Skeleton variant="rectangular" className="skeletoonLoad" animation="wave" width="40%" height={28} />
                <Skeleton variant="rectangular" className="skeletoonLoad" animation="wave" width="15%" height={28} />
            </div>
            <Skeleton variant="rectangular" className="skeletoonLoad" animation="wave" width="95%" height={100} />
        </div>
    )
}