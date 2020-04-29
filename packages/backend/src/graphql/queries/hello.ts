interface HelloResponse {
	name: String
	greeting: String
}

export default {
	Query: {
		hello: function hello(root: {}, args: { name: string }): HelloResponse {
			return {
				name: args.name,
				greeting: `Hello ${args.name}`
			}
		}
	}
}
