import { AppGesture } from "../../lib/AppGesture";
import { Vibro } from "../../lib/Vibro";
import { FsUtils } from "../../lib/FsUtils";


let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;


__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit(param) {
    let verbs = FsUtils.fetchJSON("data/verbs/" + param + ".json");

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 5,
      y: 35,
      w: 192 - 10,
      h: 35,
      color: 0xffffff,
      text_size: 28,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: param.toUpperCase()
    })


    let listData = []
    for (let i = 0; i < verbs.length; i++) {
        listData.push(
            {
                word: verbs[i]["infinitive"],
            }
        )
    }

    hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
      x: 5,
      y: 80,
      w: 192-10,
      h: 400,
      item_space: 10,
      item_click_func: (list, index) => { hmApp.gotoPage({ url: "page/verb", param: param + ":" + listData[index].word }) },
      item_config: [
          {
              type_id: 0,
              item_bg_color: 0x202020,
              item_bg_radius: 10,
              text_view: [
                  {x: 5, y: 15, w: 192 - 20, h: 28, key: "word", color: 0xffffff, text_size: 28 },
              ],
              text_view_count: 1,
              item_height: 60
          }
      ],
      item_config_count: 1,
      data_array: listData,
      data_count: listData.length,
      data_type_config: [
          {
              start: 0,
              end: listData.length - 1,
              type_id: 0
          }
      ],
      data_type_config_count: 1
  })

  },
  onDestroy() {

    // On destroy, remove if not required

  }
});
