import rpio from "rpio";
import { version } from "../package.json";

const header = `
        _______
       //  ||\\ \\
 _____//___||_\\ \\___
 )  _           _    \\
 |_/ \\________/ \\___|
___\\_/________\\_/______
   blackbox v${version}
_________________________`;

console.log(header);

rpio.exit();
