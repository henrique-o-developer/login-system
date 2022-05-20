export function test(v, instance, name) {
	if (v == null || v == undefined) throw new Error(name + " is undefined or null")

	if (v.constructor.name != instance.name) throw new Error(name + " is not a(n) " + instance.name)
}

