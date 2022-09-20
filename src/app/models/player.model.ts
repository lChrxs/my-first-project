import { PlayerDetail } from "./player-detail.model";

export interface Player {
    volume : number,
    second : number,
    name : string,
    detail : PlayerDetail
}