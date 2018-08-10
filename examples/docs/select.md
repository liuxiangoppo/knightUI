# Select 选择框
----

## 基础展示
<div class="demo-block">
    <k-select>
        <k-select-option value="1" label="山东" :disabled="true"></k-select-option>
        <k-select-option value="2" label="北京"></k-select-option>
        <k-select-option value="3" label="湖南"></k-select-option>
        <k-select-option value="4" label="长春"></k-select-option>
    </k-select>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/><br/>
    <br/>
    <br/>
    <br/>
    <k-select v-model="chooseVal" @select-change="selectChange">
        <k-select-option value="5" label="显示5条"></k-select-option>
        <k-select-option value="10" label="显示10条"></k-select-option>
        <k-select-option value="15" label="显示15条"></k-select-option>
        <k-select-option value="20" label="显示20条"></k-select-option>
    </k-select>
    <k-input placeholder="哈哈哈"></k-input>
    <script>
        export default {
            data () {
                return {
                    chooseVal: '20'
                }
            },
            methods: {
                selectChange () {
                    console.log('chooseVal change:' + this.chooseVal)
                }
            }
        }
    </script>
</div>