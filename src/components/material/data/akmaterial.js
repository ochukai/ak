const materials = [
  {
    "id": 0,
    "name": "D32钢",
    "level": 5,
    "source": {},
    "madeof": {
      "三水锰矿": 1,
      "五水研磨石": 1,
      "RMA70-24": 1
    }
  },
  {
    "id": 1,
    "name": "双极纳米片",
    "level": 5,
    "source": {},
    "madeof": {
      "改良装置": 1,
      "白马醇": 2
    }
  },
  {
    "id": 2,
    "name": "聚合剂",
    "level": 5,
    "source": {},
    "madeof": {
      "提纯源岩": 1,
      "异铁块": 1,
      "酮阵列": 1
    }
  },
  {
    "id": 3,
    "name": "RMA70-24",
    "level": 4,
    "source": {
      "4-9": "罕见"
    },
    "madeof": {
      "RMA70-12": 1,
      "固源岩组": 2,
      "酮凝集组": 1
    }
  },
  {
    "id": 4,
    "name": "五水研磨石",
    "level": 4,
    "source": {
      "4-8": "罕见"
    },
    "madeof": {
      "研磨石": 1,
      "异铁组": 1,
      "全新装置": 1
    }
  },
  {
    "id": 5,
    "name": "三水锰矿",
    "level": 4,
    "source": {
      "4-7": "罕见"
    },
    "madeof": {
      "轻锰矿": 2,
      "聚酸酯组": 1,
      "扭转醇": 1
    }
  },
  {
    "id": 6,
    "name": "白马醇",
    "level": 4,
    "source": {
      "4-4": "罕见"
    },
    "madeof": {
      "扭转醇": 1,
      "糖组": 1,
      "RMA70-12": 1
    }
  },
  {
    "id": 7,
    "name": "改良装置",
    "level": 4,
    "source": {
      "4-10": "罕见"
    },
    "madeof": {
      "全新装置": 1,
      "固源岩组": 2,
      "研磨石": 1
    }
  },
  {
    "id": 8,
    "name": "酮阵列",
    "level": 4,
    "source": {
      "4-5": "罕见"
    },
    "madeof": {
      "酮凝集组": 2,
      "糖组": 1,
      "轻锰矿": 1
    }
  },
  {
    "id": 9,
    "name": "异铁块",
    "level": 4,
    "source": {
      "S4-1": "罕见"
    },
    "madeof": {
      "异铁组": 2,
      "全新装置": 1,
      "聚酸酯组": 1
    }
  },
  {
    "id": 10,
    "name": "聚酸酯块",
    "level": 4,
    "source": {
      "3-8": "罕见"
    },
    "madeof": {
      "聚酸酯组": 2,
      "酮凝集组": 1,
      "扭转醇": 1
    }
  },
  {
    "id": 11,
    "name": "糖聚块",
    "level": 4,
    "source": {
      "4-2": "罕见"
    },
    "madeof": {
      "糖组": 2,
      "异铁组": 1,
      "轻锰矿": 1
    }
  },
  {
    "id": 12,
    "name": "提纯源岩",
    "level": 4,
    "source": {
      "4-6": "罕见"
    },
    "madeof": {
      "固源岩组": 4
    }
  },
  {
    "id": 13,
    "name": "全新装置",
    "level": 3,
    "source": {
      "3-4": "小概率",
      "4-10": "小概率"
    },
    "madeof": {
      "装置": 4
    }
  },
  {
    "id": 14,
    "name": "酮凝集组",
    "level": 3,
    "source": {
      "3-1": "小概率",
      "4-5": "小概率"
    },
    "madeof": {
      "酮凝集": 4
    }
  },
  {
    "id": 15,
    "name": "异铁组",
    "level": 3,
    "source": {
      "2-8": "小概率",
      "S4-1": "小概率"
    },
    "madeof": {
      "异铁": 4
    }
  },
  {
    "id": 16,
    "name": "聚酸酯组",
    "level": 3,
    "source": {
      "2-6": "小概率",
      "3-8": "小概率"
    },
    "madeof": {
      "聚酸酯": 4
    }
  },
  {
    "id": 17,
    "name": "糖组",
    "level": 3,
    "source": {
      "2-5": "小概率",
      "4-2": "小概率"
    },
    "madeof": {
      "糖": 4
    }
  },
  {
    "id": 18,
    "name": "固源岩组",
    "level": 3,
    "source": {
      "2-4": "小概率",
      "4-6": "小概率"
    },
    "madeof": {
      "固源岩": 5
    }
  },
  {
    "id": 19,
    "name": "装置",
    "level": 2,
    "source": {
      "1-12": "中概率",
      "S3-4": "大概率"
    },
    "madeof": {
      "破损装置": 3
    }
  },
  {
    "id": 20,
    "name": "酮凝集",
    "level": 2,
    "source": {
      "S2-1": "中概率",
      "3-7": "固定"
    },
    "madeof": {
      "双酮": 3
    }
  },
  {
    "id": 21,
    "name": "异铁",
    "level": 2,
    "source": {
      "2-1": "中概率",
      "S3-3": "固定"
    },
    "madeof": {
      "异铁碎片": 3
    }
  },
  {
    "id": 22,
    "name": "聚酸酯",
    "level": 2,
    "source": {
      "1-8": "大概率",
      "S3-2": "固定"
    },
    "madeof": {
      "酯原料": 3
    }
  },
  {
    "id": 23,
    "name": "糖",
    "level": 2,
    "source": {
      "2-2": "大概率",
      "S3-1": "固定"
    },
    "madeof": {
      "代糖": 3
    }
  },
  {
    "id": 24,
    "name": "固源岩",
    "level": 2,
    "source": {
      "1-7": "固定",
      "S2-12": "固定"
    },
    "madeof": {
      "源岩": 3
    }
  },
  {
    "id": 25,
    "name": "破损装置",
    "level": 1,
    "source": {
      "1-5": "中概率",
      "2-3": "固定"
    },
    "madeof": {}
  },
  {
    "id": 26,
    "name": "双酮",
    "level": 1,
    "source": {
      "1-6": "大概率",
      "S2-9": "固定"
    },
    "madeof": {}
  },
  {
    "id": 27,
    "name": "异铁碎片",
    "level": 1,
    "source": {
      "1-3": "大概率",
      "S2-8": "固定"
    },
    "madeof": {}
  },
  {
    "id": 28,
    "name": "酯原料",
    "level": 1,
    "source": {
      "0-11": "固定",
      "S2-7": "固定"
    },
    "madeof": {}
  },
  {
    "id": 29,
    "name": "代糖",
    "level": 1,
    "source": {
      "0-7": "固定",
      "S2-6": "固定"
    },
    "madeof": {}
  },
  {
    "id": 30,
    "name": "源岩",
    "level": 1,
    "source": {
      "0-9": "固定",
      "S2-5": "固定"
    },
    "madeof": {}
  },


  {
    "id": 31,
    "name": "扭转醇",
    "level": 3,
    "source": {
      "2-9": "小概率",
      "4-4": "小概率"
    },
    "madeof": {}
  },
  {
    "id": 32,
    "name": "研磨石",
    "level": 3,
    "source": {
      "3-3": "小概率",
      "4-8": "小概率"
    },
    "madeof": {}
  },
  {
    "id": 33,
    "name": "轻锰矿",
    "level": 3,
    "source": {
      "3-2": "小概率",
      "4-7": "小概率"
    },
    "madeof": {}
  },
  {
    "id": 34,
    "name": "RMA70-12",
    "level": 3,
    "source": {
      "2-10": "小概率",
      "4-9": "小概率"
    },
    "madeof": {}
  }
];

export default materials;

export function byId(id = 0) {
  return materials.filter(m => m.id === id)[0];
}

export const imageList = [
  require('../../../assets/images/material/0.png'),
  require('../../../assets/images/material/1.png'),
  require('../../../assets/images/material/2.png'),
  require('../../../assets/images/material/3.png'),
  require('../../../assets/images/material/4.png'),
  require('../../../assets/images/material/5.png'),
  require('../../../assets/images/material/6.png'),
  require('../../../assets/images/material/7.png'),
  require('../../../assets/images/material/8.png'),
  require('../../../assets/images/material/9.png'),
  require('../../../assets/images/material/10.png'),
  require('../../../assets/images/material/11.png'),
  require('../../../assets/images/material/12.png'),
  require('../../../assets/images/material/13.png'),
  require('../../../assets/images/material/14.png'),
  require('../../../assets/images/material/15.png'),
  require('../../../assets/images/material/16.png'),
  require('../../../assets/images/material/17.png'),
  require('../../../assets/images/material/18.png'),
  require('../../../assets/images/material/19.png'),
  require('../../../assets/images/material/20.png'),
  require('../../../assets/images/material/21.png'),
  require('../../../assets/images/material/22.png'),
  require('../../../assets/images/material/23.png'),
  require('../../../assets/images/material/24.png'),
  require('../../../assets/images/material/25.png'),
  require('../../../assets/images/material/26.png'),
  require('../../../assets/images/material/27.png'),
  require('../../../assets/images/material/28.png'),
  require('../../../assets/images/material/29.png'),
  require('../../../assets/images/material/30.png'),
  require('../../../assets/images/material/31.png'),
  require('../../../assets/images/material/32.png'),
  require('../../../assets/images/material/33.png'),
  require('../../../assets/images/material/34.png'),
]

