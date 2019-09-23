import { Browser } from './core/Browser'

export class Config {
    seed =  Browser.getQueryNumber("seed");
    roomNumbers = Browser.getQueryBoolean("roomNumbers", false);
}