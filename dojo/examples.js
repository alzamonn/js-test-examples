dojo.provide("dojo.example")

doh.register("SomeCode", [
  {
    name: "thingerTest",
    setUp: function(){
      this.object = {hello: "world"}
    },
    runTest: function(){
      doh.assertEqual({hello: "worggdfgdfgdfgggld"}, this.object)
      doh.assertNotEqual({say: "hgdfghdfgggggi"}, this.object)
    }
  }
])
