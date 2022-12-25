const index = {
    data: {
        total: 1,
        list: [
            {
                id: 1,
                ATitle: "求一个菜谱",
                WithA: 1,
                AState: "待响应",
                APrice: 10,
                FlavorType: [
                    {
                        id: 1,
                        tag: "常见菜式"
                    },
                    {
                        id: 2,
                        tag: "儿童"
                    },
                    {
                        id: 3,
                        tag: "酸甜"
                    }
                ],
                AItem: {
                    AID: 1,
                    AUserID: 2,
                    AUserName: "Somebody1",
                    AUserIcon: "",
                    RegionType: "北京 北京市",
                    AContent: "求一个适合小孩子的酸甜口的菜谱",
                    ReplyCount: 10,
                    ImagePath: "",
                    APrice: "10",
                    ACreateTime: "2022/12/13 23:01",
                    AEndTime: "2022/12/13 23:01",
                    AChangeTime: "2022/12/13 23:01",
                    LastBUserID: 3,
                    LastBUser: "replyer1",
                    LastReplyTime: "2022/12/13 23:01"
                },
                BList: [
                    {
                        id: 1,
                        BID: 10,
                        BUserID: 3,
                        BUserName: "Reply1",
                        BUserIcon: "",
                        RegionType: "北京 北京市",
                        BContent: "菜谱如下blahblahblah",
                        BTime: "2022/12/13 22:31",
                        BfloorCnt: 1
                    },
                    {
                        id: 2,
                        BID: 11,
                        BUserID: 4,
                        BUserName: "Reply2",
                        BUserIcon: "",
                        RegionType: "北京 北京市",
                        BContent: "菜谱如下blahblahblah2",
                        BTime: "2022/12/13 23:01",
                        BfloorCnt: 2
                    }
                ]
            }
        ]
    }
};

export default {
    index
};
