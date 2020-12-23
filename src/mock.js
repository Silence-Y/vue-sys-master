import Mock from 'mockjs'

const Random = Mock.Random

// 用户数据
const userDate = () => {
    let users = [];
    for (let i = 0; i < 10; i++) {
        let user = {
            'id': i + 1,
            'name': Random.cname(),
            'phone': Mock.mock(/^1[0-9]{10}$/),
            'date': Random.date('yyyy-MM-dd'),
            'address': Mock.mock('@county(true)'),
            'status': Random.integer(0, 1)
        }
        users.push(user)
    }
    return users
}
Mock.mock('/api/users', userDate)