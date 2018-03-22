import { GetAge } from './dateTr';

export let c = (d) => {
    return [
        {key: 'name', title: '微信名'},
        {key: 'realName', title: '姓名'},
        {key: 'phone', title: '电话号码'},
        {
            key: 'startDate',
            title: '时间',
            render: (h, p) => {
                return p.row.startDate.substr(0, 10);
            }
        },
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
            filters: d.map(item => {
                return { label: item.teamName, value: item.teamName };
            }),
            filterMultiple: false,
            filterMethod (value, row) {
                return row.teamName === value;
            }
        },
        {
            key: 'status',
            title: '状态',
            render: (h, p) => {
                if (p.row.status === 0) { return '待处理'; } else if (p.row.status === 1) { return '进行中'; } else if (p.row.status === 2) { return '已完成'; }
            },
            filters: [{label: '进行中', value: 1}, {label: '待处理', value: 0}, {label: '已完成', value: 2}],
            filterMultiple: false,
            filterMethod (value, row) {
                return row.status === value;
            }
        },
        {title: '操作', align: 'center', width: 140, key: 'handle', handle: ['reply', 'close', 'check']}
    ];
};

export let searchTable1 = [];

export let columns2 = [
    {key: 'name', title: '微信名'},
    {key: 'realName', title: '姓名'},
    {key: 'phone', title: '电话号码'},
    {key: 'id_number', title: '身份证号', width: 157},
    {
        key: 'age',
        title: '年龄',
        render: (h, p) => {
            return GetAge(p.row.id_number);
        }
    },
    {key: 'gender', title: '性别'},
    {key: 'teamName', title: '团队'},
    {key: 'money', title: '余额'},
    {title: '操作', align: 'center', key: 'handle', handle: ['check']}
];
export let userHeaData = [
    {name: '刘德华', highPressure: 113, lowPressure: 86, bloodSugar: 12, heartRate: 87, testTime: '2017/12/12 18:00:00'},
    {name: '刘德华', highPressure: 123, lowPressure: 76, bloodSugar: 14, heartRate: 85, testTime: '2017/12/17 18:00:00'},
    {name: '刘德华', highPressure: 143, lowPressure: 66, bloodSugar: 18, heartRate: 88, testTime: '2018/01/02 18:00:00'},
    {name: '刘德华', highPressure: 103, lowPressure: 87, bloodSugar: 22, heartRate: 90, testTime: '2018/01/05 18:00:00'},
    {name: '刘德华', highPressure: 126, lowPressure: 85, bloodSugar: 32, heartRate: 75, testTime: '2018/01/12 18:00:00'},
    {name: '刘德华', highPressure: 109, lowPressure: 93, bloodSugar: 22, heartRate: 78, testTime: '2018/02/12 18:00:00'}
];
