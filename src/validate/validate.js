import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate 
const dictionary = {
   zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        required: ( field )=> "请输入" + field
      },
      attributes:{
        email:'邮箱',
        password:'密码',
        name: '账号',
        phone: '手机',
        qq:'qq'
      }
  }
};

Validator.updateDictionary(dictionary);
// 自定义表单扩展
Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
// 自定义表单扩展
Validator.extend('qq', {
  messages: {
    zh_CN:field => 'qq号码输入不正确'
  },
  validate: value => {
    return /^[1-9][0-9]{4,14}$/.test(value);
  }
});