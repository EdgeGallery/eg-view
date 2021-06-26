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
            :data="currentPageTableData"
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
          <h2/>
          <eg-pagination
            :page-num="pageNum"
            :page-size="curPageSize"
            :page-sizes="pageSizes"
            :total="total"
            @sizeChange="sizeChange"
            @currentChange="currentChange"
          />
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
    <el-dialog title="活动调查" :visible.sync="dialogFormVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 底部组件 -->
    <div class="padding56">
      <EgFooter
        v-if="platformData[0].url!==''"
        :platform-data="platformData"
        :show-full-footer-page="showFullFooterPage"
        :specific-bg="specificBg"
        specific-bg-color="#ffffff"
      />
    </div>
  </div>
</template>

<script>
import EgBreadCrumb from '../components/EgBreadCrumb'
import EgPagination from '../components/EgPagination.vue'
import EgFooter from '../components/EgFooter.vue'
export default {
  components: { EgBreadCrumb, EgPagination, EgFooter },
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
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄 金沙路大厦 F区 幸福小院 F28栋 2单元 201室',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-05',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄 金沙路大厦 F区 幸福小院 F28栋 2单元 201室',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-09',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-10',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-11',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄 金沙路大厦 F区 幸福小院 F28栋 2单元 201室',
        zip: 200333
      }, {
        date: '2016-05-12',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-13',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-14',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-15',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄 金沙路大厦 F区 幸福小院 F28栋 2单元 201室',
        zip: 200333
      }, {
        date: '2016-05-16',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }],
      currentPageTableData: [],
      pageNum: 1,
      pageSizes: [10, 20, 30],
      total: 0,
      curPageSize: 10,
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
      formLabelWidth: '120px',
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
      platformData: [
        {
          name: 'AppStore',
          url: 'xxx'
        },
        {
          name: 'ATP',
          url: 'xxx'
        },
        {
          name: 'MECM',
          url: 'xxx'
        }
      ],
      showFullFooterPage: true,
      specificBg: true
    }
  },
  methods: {
    sizeChange (val) {
      this.curPageSize = val
    },
    currentChange (val) {
      this.pageNum = val
    },
    handleClick (row) {
      console.log(row)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    refreshCurrentData () {
      let start = this.curPageSize * (this.pageNum - 1)
      let end = this.curPageSize * this.pageNum
      this.currentPageTableData = this.tableData.slice(start, end)
    }
  },
  watch: {
    pageNum: function () {
      this.refreshCurrentData()
    },
    curPageSize: function () {
      this.refreshCurrentData()
    }
  },
  mounted () {
    this.total = this.tableData.length
    this.refreshCurrentData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding56 {
    padding: 0 56px 20px 56px;
  }
</style>
