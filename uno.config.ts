import { defineConfig } from "unocss";


const globalValues = "inherit|initial|revert|revert-layout|unset";

const sizedValue = "?:(\\d+(?:\.\\d+)?)(\\w*|%)";

const colorCode = "[0-9A-F]{3,4}|[0-9A-F]{6}|[0-9A-F]{8}";

const outlineStyle = "dotted|dashed|solid|double|groove|ridge|inset|outset|none|hidden";

const borderStyle = "dotted|dashed|solid|double|groove|ridge|inset|outset|none|hidden";


function c(value: string) { return `#${value}`; }
function u(value: string, unit: string) { return `${value}${unit || "px"}`; }


function sidedRule(sides: string|undefined, style: string, value: string) {
  if (!sides) return { [style.replace("{}", "")]: value };

  const ret = {} as Record<string, string>;

  if (sides.includes("t")) ret[style.replace("{}", "-top"   )] = value;
  if (sides.includes("r")) ret[style.replace("{}", "-right" )] = value;
  if (sides.includes("b")) ret[style.replace("{}", "-bottom")] = value;
  if (sides.includes("l")) ret[style.replace("{}", "-left"  )] = value;

  return ret;
}


function cornerRule(corners: string|undefined, style: string, value: string) {
  if (!corners) return { [style.replace("{}", "")]: value };

  const ret = {} as Record<string, string>;

  if (corners.includes("tl")) ret[style.replace("{}", "-top-left"    )] = value;
  if (corners.includes("tr")) ret[style.replace("{}", "-top-right"   )] = value;
  if (corners.includes("bl")) ret[style.replace("{}", "-bottom-left" )] = value;
  if (corners.includes("br")) ret[style.replace("{}", "-bottom-right")] = value;

  return ret;
}


export default defineConfig({
  rules: [
      ["reset", { all: "unset" }, { layer: "base" }],

    /*------------------------------------ Background Color -------------------------------------*/
      [new RegExp(`^bgc-(${globalValues})$`), m => ({ "background-color":  (m[1]) })],
      [new RegExp(`^bgc-(${colorCode   })$`), m => ({ "background-color": c(m[1]) })],


    /*------------------------------------------ Color ------------------------------------------*/
      [new RegExp(`^c-(${globalValues})$`), m => ({ "color":  (m[1]) })],
      [new RegExp(`^c-(${colorCode   })$`), m => ({ "color": c(m[1]) })],


    /*----------------------------------------- Outline -----------------------------------------*/
      [new RegExp(`^ols-(${globalValues})$`), m => ({ "outline-style" : m[1] })],
      [new RegExp(`^olc-(${globalValues})$`), m => ({ "outline-color" : m[1] })],
      [new RegExp(`^olw-(${globalValues})$`), m => ({ "outline-width" : m[1] })],
      [new RegExp(`^olo-(${globalValues})$`), m => ({ "outline-offset": m[1] })],

      [new RegExp(`^ols-(${outlineStyle})$`), m => ({ "outline-style" :  (m[1]      ) })],
      [new RegExp(`^olc-(${colorCode   })$`), m => ({ "outline-color" : c(m[1]      ) })],
      [new RegExp(`^olw-(${sizedValue  })$`), m => ({ "outline-width" : u(m[1], m[2]) })],
      [new RegExp(`^olo-(${sizedValue  })$`), m => ({ "outline-offset": u(m[1], m[2]) })],

      // outline shorthand
      [new RegExp(`^ol-${sizedValue}-(${outlineStyle})-(${colorCode})$`), m => ({
        "outline-width": u(m[1], m[2]),
        "outline-style":  (m[3]),
        "outline-color": c(m[4]),
      })],


    /*----------------------------------------- Border ------------------------------------------*/
      [new RegExp(`^bds(?:-([trbl]+))?-(${globalValues})$`), m => sidedRule(m[1], "border{}-style", m[2])],
      [new RegExp(`^bdc(?:-([trbl]+))?-(${globalValues})$`), m => sidedRule(m[1], "border{}-color", m[2])],
      [new RegExp(`^bdw(?:-([trbl]+))?-(${globalValues})$`), m => sidedRule(m[1], "border{}-width", m[2])],

      [new RegExp(`^bds(?:-([trbl]+))?-(${borderStyle })$`), m => sidedRule(m[1], "border{}-style",  (m[2]      ))],
      [new RegExp(`^bdc(?:-([trbl]+))?-(${colorCode   })$`), m => sidedRule(m[1], "border{}-color", c(m[2]      ))],
      [new RegExp(`^bdw(?:-([trbl]+))?-(${sizedValue  })$`), m => sidedRule(m[1], "border{}-width", u(m[2], m[3]))],

      [new RegExp(`^bd(?:-([trbl]+))?-(${sizedValue})-(${borderStyle})-(${colorCode})$`), m => ({
        ...sidedRule(m[1], "border{}-width", u(m[2], m[3])),
        ...sidedRule(m[1], "border{}-style",  (m[4]      )),
        ...sidedRule(m[1], "border{}-color", c(m[5]      )),
      })],


    /*-------------------------------------- Border Radius --------------------------------------*/
      [new RegExp(`^bdr(?:-((?:tl|tr|bl|br)+))?-(${globalValues})$`), m => cornerRule(m[1], "border{}-radius", m[2])],

      [new RegExp(`^bdr(?:-((?:tl|tr|bl|br)+))?-(${sizedValue})(?:-(${sizedValue}))?$`), m =>
        cornerRule(m[1], "border{}-radius", `${u(m[2], m[3])} ${m[4] ? u(m[4], m[5]) : ""}`)],


    // [new RegExp(`^$`), m => ({})],
  ],
});
