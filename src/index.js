const yorunoRed = 'rgba(199, 24, 18)'
const yorunoBlack = 'rgb(46, 42, 42)'
const yorunoYellow = 'rgba(199, 178, 84)'
const yorunoWhite = 'rgb(247, 244, 230)'
const yorunoBlue = 'rgb(58, 175, 214)'

const schemeYoruno = {
    bgColor: yorunoWhite,
    fgColor: yorunoBlack,
    cursorColor: yorunoRed,
    selectionColor: yorunoYellow,
  }



export function decorateConfig(config) {
    Object.assign({}, defaultOptions,schemeYoruno)
  
    return Object.assign({}, config, {
        backgroundColor: schemeYoruno.bgColor,
        foregroundColor: schemeYoruno.fgColor,
        cursorColor: schemeYoruno.cursorColor,
        selectionColor: schemeYoruno.selectionColor,
        colors,
        css: `
        ${config.css || ''}
        .hyper_main {
          border: none;
        }
        .header_header {
          top: 0;
          left: 0;
          right: 0;
        }
        .tabs_nav {
        }
        .tab_tab {
          border: none;
        }
        .tabs_borderShim {
          display: none;
        }
      `
    })
  }