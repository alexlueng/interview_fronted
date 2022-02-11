一个完整的请求流程：
1. 在constants中定义请求的名称常量，一般分为request, success, fail 三个
2. 在reducers中定义请求成功后返回的数据
3. 在actions中定义实际的请求
4. 在页面中引用这些接口，发送请求用dispatch, 获取数据用selector

