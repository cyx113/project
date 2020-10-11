let Vue;
class Store{
	constructor(options){
		this._mutations=options.mutations;
		this._action=options.actions;
		this.state=new Vue({
			data:options.state
		})
		this.commit=this.commit.bind(this)
		this.dispath=this.dispath.bind(this)

	}
	commit(type,payload){
		const entry=this._mutations[type]
		if(entry){
			entry(this.state,payload)
		}
	}
	dispath(type,payload){
		const entry = this ._action[type]
		if(entry){
			//此处第一个参数是this,也就是vuex对象，所以在index中使用可以解构 {commit，dispatch，state}
			entry(this,payload)
		}
	}
}
function install(_Vue){
	Vue=_Vue;
	Vue.mixin({
		beforeCreate(){
			if(this.$options.Store){
				Vue.prototype.$Store=this.$options.store
			}
		}
	})
}
export default{
	Store,
	install
}