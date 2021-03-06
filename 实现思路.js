// 电商管理后台依靠elementUI实现思路

// login.vue
// 关于布局
// 登陆使用(el-form)插件实现
// 使用flex布局登陆form

// home.vue
// 关于布局
// 整个home.vue的大的布局建议使用el-container来进行布局
// header的顶部内容可以直接使用flex
// side侧边栏内的内容可以使用NavMenu导航菜单(el-menu)来实现多级菜单
// 具体菜单内容从接口获取
// 注意遍历一二级菜单的时候注意遍历标签的选择
// 建议:一级菜单 el-submenu 二级菜单el-menu-item


// 关于路由
// 这里建议使用嵌套路由,因为其实无论怎么跳转,应该都是在home.vue下
// 所以配置home其它组件的应该都在其children下

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 一.用户管理-用户列表
// 使用面包屑功能(el-breadcrumb)来展示具体菜单路径
// 1.使用卡片el-card容器来装载内容
// 2.使用el-row(layout布局来处理)el-input的布置
// 搜索框使用el-input输入框来实现并且添加可清空属性
// 3.具体用户展示内容使用带边框表格el-table来装载内容
// 4.添加用户dialog界面使用基本用法el-dialog
// el-dialog中添加el-form表单来填充内容
// 自定义添加用户内容时的校验规则
// 使用正则来自定义校验规则
// 注意重点,自定义规则的校验函数必须卸载data的return外面,注意是外面!!
// 5.编辑用户操作和添加用户类似都是使用el-dialog框实现
// 6.删除用户需要去挂载Vue.prototype.$confirm = ElementUi.MessageBox.confirm
// 使用这个弹出框来判断用户是否误操作

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 二.权限管理处理
// 2.1 权限管理-权限列表
// 2.1.1面包屑组件布局

// 卡片组件布局内容-table组件布局具体内容-axios获取数据然后渲染

// 2.2权限管理-角色列表
// 2.2.1面包屑组件布局

// 2.2.2卡片组件布局内容-table组件布局具体内容-axios获取数据然后渲染

// 2.2.3在table标签中还包含子标签expand(展开按钮控件)里面布局了具体的角色和对应权限细节

// 2.2.4在expand中使用layou(el-row)t布局去布局对应的1,2,3级标签,善于利用:span属性进行1,2,3级等分

// 2.2.5这里的布局要充分利用el-row(行) el-col(列)因为需要进行三层for循环

// 2.2.6为1,2,3级标签使用Tag标签(el-tag)来装饰,并为其添加可移除功能,通过可移除功能触发(close事件)删除对应的标签权限功能

// 2.2.7分配权限功能数据展示
// 通过dialog框事项
// 通过axios获取对应数据
// 通过el-tree树结构来展示对应数据,注意el-tree的属性使用方式,:props来定义应该根据什么规则来展示
// 有特定属性
<!--树形控件绑定对象:props渲染的方式,label希望看到什么名称展示,children展示具体那条数据数组名-->
<!--是否变成可选控件show-checkbox-->
<!--是否全部展开default-expand-all-->
<!--勾选内容的时候最后的节点值其实是勾选了其id值node-key-->
<!--默认勾选节点对应是一个数组default-checked-keys,根据节点值(id)来判断是否勾选-->//
// 参考
// 在点击分配权限的时候使用递归来获取三级组件的具体id值数据,放到default-checked-keys(默认勾选节点数组中)
// 根据getCheckedKeys() ,getHalfCheckedKeys()来获取选中的父子节点
// 通过选出来的值使用axios传递的服务器

// 2.2.8用户管理的分配权限的默认选项实现
// 使用dialog来填充内容
// 使用select选择器选择内容,请根据官网注意其用法
// 选择成功后使用axios传递服务器修改值
// 这里需要用递归方式来获取服务器的值,然后在来判断

// 三.商品管理
// 3.1商品分类

// 3.1.1使用第三方组件的树式table表格来渲染数据
// npm install vue-table-with-tree-grid --save
// 参考链接
// https://github.com/MisterTaki/vue-table-with-tree-grid
// main.js配置该组件为全局组件并在项目中使用
// 导入树形table表格
// import TreeTable from 'vue-table-with-tree-grid'
// // 注册成全局组件
// Vue.component('tree-table',TreeTable)
<!--树table插件表格-->
<!--:data接收的数据源-->
<!--:columns接收是一个数组,数组中的每个对象对应每列展示的限制
label展示的名字, prop会根据里面的值去递归整个列表,然后找出对应的值得,分级对应的显示出来
type将当前列定义为模板列(这个template值为写死) template当前这一列指定的模板名称-->
<!--selection-type 是否为多选类型表格(布尔值)-->
<!--expand-type 是否为展开类型表格(布尔值)-->
<!--show-index自动添加索引列(布尔值)-->
<!--index-text自定义索引列名称String-->
<!--border添加纵向边框线-->
<!--:change-on-select 是可以选择父级菜单的选择器,但官方已经没有推荐,仍然可以使用-->

// 3.1.2在商品分类中的dialog框里面的选择器为级联选择器Cascader
// 参数如下
// <!--:options具体数据源-->
// <!--:value双向绑定数据,因为是多级菜单,这里需要绑定一个数组-->
// <!--:props数据渲染规则 value代表最后选择的值,label用户看到的值,childeren具体渲染的父下面的子菜单-->
// <!--:clearable 是否支持清空-->
// <!--change监听选中节点的变化-->
// <!--:change-on-select 是可以选择父级菜单的选择器,但官方已经没有推荐,仍然可以使用-->
// 在关闭分类dialog框的时候记得,清空所有的数据,保证用户下次进入仍为初始状态
// (注意:这里服务器有个bug,只有添加父级标签才可以成功,和前端代码无关)

// 3.2商品分类-分类参数实现
// 3.2.1使用面包屑来作顶部导航

// 3.2.2使用el-card布局布局核心内容

// 3.2.3使用级联选择器来布局三级菜单页面
// 提示:这里像服务器提交的必须是三级菜单的id所以需要在监听事件@change中判断下其长度
// 如果不等于3,直接清空等于3直接取最后的值

// 3.2.4使用新组建标签页(el-tags)来布局主要内容

// 3.2.5 标签页中的按钮是否可点击,根据服务器返回数据通过计算属性的值来判断

// 3.2.6 在不同标签页下使用el-table来展示对应的数据
// 因为many是动态, only是静态,
// 所以建议判断下在获取到服务器数据之后,根据标签页的特殊属性来判断下建立不同的列表来存放

// 3.2.7 在渲染table表格的expand添加项的时候,注意一下,
// 服务器返回的数据attr_vals是一个字符串,需要把它split成数组,然后循环渲染
// 注意:如果是一个新的分类可能没有这个值,这个时候需要三元表达式判断下如果是空给他一个空数组
// 在绑定动态编辑标签的时候,因为动态标签需要绑定一个动态v-model数据,
// 以及一个特殊的布尔值,用来显示到底是button还是input所以,
// 在处理attr_vals处应该为每个对象再添加一个动态绑定数据值,和显示布尔值

// 3.2.8 在添加分类子分类的时候要注意服务器传参的转换,服务器传递过来的是attr_val是字符串
// 需要转换为数组,同时在像服务器传递回去的时候要转回字符串

// 3.2.9 编辑按钮
// 在table渲染的时候对编辑和删除按钮进行template模板加载,这样可以获取scope
// 然后从这里scope获取这里修改参数的默认值,编辑api需要的信息的id可以从scope这里获取
// 然后是动静态的这个参数可以从标签页的值获取

// 3.2.10 删除按钮
// 使用messageBox来完成,具体需要的参数也可从template模板中scope获取

// 3.2.11 添加或修改三级子参数
// 通过template模板中scope获取获取attr_vals遍历到select菜单中
// 在添加或修改参数中处理attr_vals参数,通过select来修改
// 如果不选择select则是添加需要判断select双向绑定的index值
// 可以为index值定义null,根据null来判断添加还是修改
// 记得传回给服务器的时候把attr_vals变回字符串集

// 3.2.12 删除三级子参数
// 同样通过template模板中scope获取获取attr_vals遍历到select菜单中
// scope.row获取attr_id,attr_name然后通过splice删除
// 最后转会字符串集
// 掉3.2.11的接口去进行删除

// 3.3商品列表
// 大致样式和用户管理用户列表基本一致
// 添加商品列表是一个全新的路由
// 里面使用了步骤条组件el-steps
// 并且标签页el-tabs使用的是标签页,有特定属性tab-position
// 为整个el-tabs包裹el-form表单来保证后续填写内容的验证,然后在每个el-tabs-pane中包裹填充el-form-item来保证其验证
// 在标签页跳转的时候使用标签的特定属性:before-leave来监听是否离开该标签,该属性绑定一个函数,

// 并且包含两个参数activeName即将进入的标签页 oldActiveName即将离开的标签页在函数中返回布尔值来决定是否离开该标签页

// 在三级子菜单动态参数展示的时候使用复选框el-checkbox来渲染attr_vals的数据(记得把动态的attr_vals转成数组遍历)

// 静态参数因为attr_vals只有一个值,所以不需要转数组

// 富文本编辑器的使用
// 参考学习地址:https://github.com/surmon-china/vue-quill-editor
// npm install vue-quill-editor --save
// 导入组件和相关样式并安装组件
// 使用组件并进行v-model双向绑定

// 使用第三放库把对象进行深拷贝,复制出新的一份
// npm install lodash --save
// 导入第三方库 import _ from lodash -- 官方建议把库的名字命名为_
// 具体深拷贝方法
// const form = _.cloneDeep(dataForm)

// 提交数据的时候记得进行本地表单验证
// 调教数据的时候记得goods_cat转换会字符串
