import * as initData from './init_data';
import { GetAge } from './dateTr';

export const columns1 = [
    {key: 'name', title: '姓名'},
    {key: 'phone', title: '电话号码'},
    {key: 'startDate', title: '时间'},
    {key: 'idNumber', title: '身份证号', width: 157},
    {
        key: 'age',
        title: '年龄',
        render: (h, p) => {
            return GetAge(p.row.idNumber);
        }
    },
    {key: 'gender', title: '性别'},
    {
        key: 'teamName',
        title: '团队',
        filters: initData.teamData.map(item => { return { label: item.team, value: item.team }; }),
        filterMultiple: false,
        filterMethod (value, row) {
            return row.team === value;
        }
    },
    {
        key: 'status',
        title: '状态',
        render: (h, p) => {
            if (p.row.status === 0) { return '待处理'; } else if (p.row.status === 1) { return '进行中'; } else if (p.row.status === 2) { return '已完成'; }
        },
        filters: [{label: '进行中', value: 1}, {label: '待处理', value: 0}],
        filterMultiple: false,
        filterMethod (value, row) {
            if (value === 1) {
                return row.status === value;
            } else if (value === 0) {
                return row.status === value;
            }
        }
    },
    {title: '操作', align: 'center', width: 140, key: 'handle', handle: ['reply', 'close', 'check']}
];

export let searchTable1 = [
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255},
    {name: '张雯雯', tel: '13628837463', date: '2012/12/12', status: 0, team: '周杰伦工作室', id: 2, sex: 1, age: 27, idnumber: 510303199302210255},
    {name: '王小平', tel: '13628837463', date: '2012/12/12', status: 2, team: '汪峰工作室', id: 3, sex: 0, age: 42, idnumber: 510303199302210255}
];

export let searchTable2 = [
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255},
    {name: '张雯雯', tel: '13628837463', date: '2012/12/12', status: 0, team: '周杰伦工作室', id: 2, sex: 1, age: 27, idnumber: 510303199302210255},
    {name: '王小平', tel: '13628837463', date: '2012/12/12', status: 2, team: '汪峰工作室', id: 3, sex: 0, age: 42, idnumber: 510303199302210255}
];

export let columns2 = [
    {key: 'name', title: '姓名'},
    {key: 'tel', title: '电话号码'},
    {key: 'idnumber', title: '身份证号', width: 157},
    {key: 'age', title: '年龄'},
    {
        key: 'sex',
        title: '性别',
        render: (h, p) => {
            if (p.row.sex === 0) { return '女'; } else if (p.row.sex === 1) { return '男'; }
        }
    },
    {key: 'team', title: '团队'},
    {key: 'balance', title: '余额'},
    {title: '操作', align: 'center', key: 'handle', handle: ['check']}
];
export let userList = [
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255, balance: 2100},
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255, balance: 2100},
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255, balance: 2100},
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255, balance: 2100},
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255, balance: 2100},
    {name: '刘德华', tel: '13628837463', date: '2012/12/12', status: 1, team: '王勉工作室', id: 1, sex: 1, age: 33, idnumber: 510303199302210255, balance: 2100}
];
export let userHeaData = [
    {name: '刘德华', highPressure: 113, lowPressure: 86, bloodSugar: 12, heartRate: 87, testTime: '2017/12/12 18:00:00'},
    {name: '刘德华', highPressure: 123, lowPressure: 76, bloodSugar: 14, heartRate: 85, testTime: '2017/12/17 18:00:00'},
    {name: '刘德华', highPressure: 143, lowPressure: 66, bloodSugar: 18, heartRate: 88, testTime: '2018/01/02 18:00:00'},
    {name: '刘德华', highPressure: 103, lowPressure: 87, bloodSugar: 22, heartRate: 90, testTime: '2018/01/05 18:00:00'},
    {name: '刘德华', highPressure: 126, lowPressure: 85, bloodSugar: 32, heartRate: 75, testTime: '2018/01/12 18:00:00'},
    {name: '刘德华', highPressure: 109, lowPressure: 93, bloodSugar: 22, heartRate: 78, testTime: '2018/02/12 18:00:00'}
];
