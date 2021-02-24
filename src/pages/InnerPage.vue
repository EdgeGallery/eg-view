<template>
  <div>
    <eg-bread-crumb :data="crumbData" />
    <div class="padding56">
      <el-row>
        <el-col :span="24">
          <el-table
            :data="tableData_noData"
            border
            style="width: 100%"
            header-cell-class-name="headerStyle">
            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
              <template slot-scope="scope">
                <el-popover
                  placement="bottom"
                  width="300"
                  trigger="hover"
                  v-if="scope.row.address.length>24"
                >
                  <div>{{ scope.row.address }}</div>
                  <div slot="reference">
                    {{ scope.row.address }}
                  </div>
                </el-popover>
                <div v-else>
                  {{ scope.row.address }}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编">
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
                <el-button type="text">编辑</el-button>
              </template>
            </el-table-column>
            <template slot="empty">
              <div>
                <img
                  src="../assets/images/empty.png"
                  alt=""
                  style="padding: 10px;"
                >
                <p>暂无数据</p>
              </div>
            </template>
          </el-table>
        </el-col>
      </el-row>
      <h2/>
      <el-row>
        <el-col :span="24">
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            header-cell-class-name="headerStyle">
            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
              <template slot-scope="scope">
                <el-popover
                  placement="bottom"
                  width="300"
                  trigger="hover"
                  v-if="scope.row.address.length>24"
                >
                  <div>{{ scope.row.address }}</div>
                  <div slot="reference">
                    {{ scope.row.address }}
                  </div>
                </el-popover>
                <div v-else>
                  {{ scope.row.address }}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编">
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
                <el-button type="text">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <h2/>
      <el-row>
        <el-button type="primary" @click="dialogVisible = true">点击打开一个简易对话框</el-button>
        <el-button @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
      </el-row>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动详情" :label-width="formLabelWidth">
          <el-input v-model="form.detail" autocomplete="off" type="textarea"
            :rows="2"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import EgBreadCrumb from '../components/EgBreadCrumb'
export default {
  components: { EgBreadCrumb },
  data () {
    return {
      crumbData: [{
        name: '首页',
        path: '/'
      }, {
        name: '内部页',
        path: '/innerPage'
      }],
      tableData_noData: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄 金沙路大厦 F区 幸福小院 F28栋 2单元 201室',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }],
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding56 {
    padding: 0 56px 20px 56px;
  }
</style>
