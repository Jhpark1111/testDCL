var entity21302 = new Entity("building1")
engine.addEntity(entity21302)
entity21302.addComponent(new Transform({ position: new Vector3(10.55, 0.17, 4.817429) }))
entity21302.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity21302.getComponent(Transform).scale.set(1, 1, 1)
entity21302.addComponent(new GLTFShape("unity_assets/entity21302.gltf"))
entity21302.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity21250 = new Entity("server3")
engine.addEntity(entity21250)
entity21250.addComponent(new Transform({ position: new Vector3(4.31, -0.07, 9.38) }))
entity21250.getComponent(Transform).rotation.set(2.185569E-08, 0, 0, 1)
entity21250.getComponent(Transform).scale.set(1, 1, 1)
entity21250.addComponent(new GLTFShape("unity_assets/entity21250.gltf"))
entity21250.getComponent(Transform).rotation.set(-9.553427E-16, 1, 2.185569E-08, -4.371139E-08)
var entity14202 = new Entity("Cube")
engine.addEntity(entity14202)
entity14202.addComponent(new Transform({ position: new Vector3(6.17, 1.316977, 4.984135) }))
entity14202.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity14202.getComponent(Transform).scale.set(1, 1, 1)
entity14202.addComponent(new GLTFShape("unity_assets/entity14202.gltf"))
entity14202.getComponent(Transform).rotation.set(0, 1, 0, -4.371139E-08)
var entity21216 = new Entity("whiskey_bottle_1")
engine.addEntity(entity21216)
entity21216.addComponent(new Transform({ position: new Vector3(4.397305, 0.1414866, 7.209455) }))
entity21216.getComponent(Transform).rotation.set(1.809995E-06, 0, 0, 1)
entity21216.getComponent(Transform).scale.set(1, 1, 1)
entity21216.addComponent(new GLTFShape("unity_assets/entity21216.gltf"))
entity21216.getComponent(Transform).rotation.set(-7.91174E-14, 1, 1.809995E-06, -4.371139E-08)
var entity21210 = new Entity("piano_chair")
engine.addEntity(entity21210)
entity21210.addComponent(new Transform({ position: new Vector3(7.958651, 1.256148, 6.538359) }))
entity21210.getComponent(Transform).rotation.set(1.809995E-06, 0, 0, 1)
entity21210.getComponent(Transform).scale.set(1, 1, 1)
entity21210.addComponent(new GLTFShape("unity_assets/entity21210.gltf"))
entity21210.getComponent(Transform).rotation.set(-7.91174E-14, 1, 1.809995E-06, -4.371139E-08)
var entity21230 = new Entity("barrel_stand")
engine.addEntity(entity21230)
entity21230.addComponent(new Transform({ position: new Vector3(7.056589, 0.8169773, 4.713264) }))
entity21230.getComponent(Transform).rotation.set(1.809995E-06, 0, 0, 1)
entity21230.getComponent(Transform).scale.set(1, 1, 1)
entity21230.addComponent(new GLTFShape("unity_assets/entity21230.gltf"))
entity21230.getComponent(Transform).rotation.set(-7.91174E-14, 1, 1.809995E-06, -4.371139E-08)
var entity21240 = new Entity("barrel_2")
engine.addEntity(entity21240)
entity21240.addComponent(new Transform({ position: new Vector3(5.482928, 1.203297, 5.592141) }))
entity21240.getComponent(Transform).rotation.set(1.809995E-06, 0, 0, 1)
entity21240.getComponent(Transform).scale.set(1, 1, 1)
entity21240.addComponent(new GLTFShape("unity_assets/entity21240.gltf"))
entity21240.getComponent(Transform).rotation.set(-7.91174E-14, 1, 1.809995E-06, -4.371139E-08)
var entity21286 = new Entity("Plane")
engine.addEntity(entity21286)
entity21286.addComponent(new Transform({ position: new Vector3(10.64, 1.77, 10.28) }))
entity21286.getComponent(Transform).rotation.set(0.7071068, 0, 0, 0.7071068)
entity21286.getComponent(Transform).scale.set(0.3, 1, 0.3)
entity21286.addComponent(new GLTFShape("unity_assets/entity21286.gltf"))
entity21286.getComponent(Transform).rotation.set(-3.090862E-08, 0.7071068, 0.7071069, -3.090862E-08)
var entity21188 = new Entity("Plane (1)")
engine.addEntity(entity21188)
entity21188.addComponent(new Transform({ position: new Vector3(7.299, 1.77, 10.28) }))
entity21188.getComponent(Transform).rotation.set(0.7071068, 0, 0, 0.7071068)
entity21188.getComponent(Transform).scale.set(0.3, 1, 0.3)
entity21188.addComponent(new GLTFShape("unity_assets/entity21188.gltf"))
entity21188.getComponent(Transform).rotation.set(-3.090862E-08, 0.7071068, 0.7071069, -3.090862E-08)
var entity21276 = new Entity("plane")
engine.addEntity(entity21276)
entity21276.addComponent(new Transform({ position: new Vector3(4.649, 0.967, 11.573) }))
entity21276.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity21276.getComponent(Transform).scale.set(1, 1, 1)
entity21276.addComponent(new PlaneShape())
entity21276.getComponent(PlaneShape).withCollisions = true
var material15900 = new Material()
material15900.albedoColor = new Color3(1, 1, 1)
material15900.metallic = 0
material15900.roughness = 1
material15900.albedoTexture = new Texture("unity_assets/Assets/Decentraland/Sample-01/Gamer/Floor.jpg")
entity21276.addComponent(material15900)

var entity21258 = new Entity("box")
engine.addEntity(entity21258)
entity21258.addComponent(new Transform({ position: new Vector3(6.54, 0.73, 11.73) }))
entity21258.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity21258.getComponent(Transform).scale.set(1, 1, 1)
entity21258.addComponent(new BoxShape())
entity21258.getComponent(BoxShape).withCollisions = true
entity21258.addComponent(material15900)

var entity14234 = new Entity("Chicken")
engine.addEntity(entity14234)
entity14234.addComponent(new Transform({ position: new Vector3(10.68, 0, 12.36) }))
entity14234.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity14234.getComponent(Transform).scale.set(1, 1, 1)

var entity14226 = new Entity("Body")
entity14226.setParent(entity14234)
entity14226.addComponent(new Transform({ position: new Vector3(-0.2897395, 0.4951812, 0.3094809) }))
entity14226.getComponent(Transform).rotation.set(8.146034E-08, 0, 0, 1)
entity14226.getComponent(Transform).scale.set(100, 100, 100)
entity14226.addComponent(new GLTFShape("unity_assets/entity14226.gltf"))
entity14226.getComponent(Transform).rotation.set(1.629207E-07, 1, -8.146034E-08, -4.37114E-08)
var entity14228 = new Entity("Head")
entity14228.setParent(entity14234)
entity14228.addComponent(new Transform({ position: new Vector3(-0.2966708, 0.8899453, 0.3055043) }))
entity14228.getComponent(Transform).rotation.set(8.146034E-08, 0, 0, 1)
entity14228.getComponent(Transform).scale.set(100, 100, 100)
entity14228.addComponent(new GLTFShape("unity_assets/entity14228.gltf"))
entity14228.getComponent(Transform).rotation.set(1.629207E-07, 1, -8.146034E-08, -4.37114E-08)
var entity14230 = new Entity("LegL")
entity14230.setParent(entity14234)
entity14230.addComponent(new Transform({ position: new Vector3(-0.278, 0.499345, 0.004138455) }))
entity14230.getComponent(Transform).rotation.set(8.146034E-08, 0, 0, 1)
entity14230.getComponent(Transform).scale.set(100, 100, 100)
entity14230.addComponent(new GLTFShape("unity_assets/entity14230.gltf"))
entity14230.getComponent(Transform).rotation.set(1.629207E-07, 1, -8.146034E-08, -4.37114E-08)
var entity14232 = new Entity("LegR")
entity14232.setParent(entity14234)
entity14232.addComponent(new Transform({ position: new Vector3(0.286, 0.5010772, 0.00832437) }))
entity14232.getComponent(Transform).rotation.set(8.146034E-08, 0, 0, 1)
entity14232.getComponent(Transform).scale.set(100, 100, 100)
entity14232.addComponent(new GLTFShape("unity_assets/entity14232.gltf"))
entity14232.getComponent(Transform).rotation.set(1.629207E-07, 1, -8.146034E-08, -4.37114E-08)

// #1
const myVideoClip = new VideoClip(
    "videos/SampleMovie.mp4"
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)
myVideoTexture.loop = true

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0


// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
    new Transform({
        position: new Vector3(8, 1, 8),
    })
)
screen.addComponent(myMaterial)
screen.addComponent(
    new OnPointerDown(() => {
        myVideoTexture.playing = !myVideoTexture.playing
    })
)
engine.addEntity(screen)

// #5
myVideoTexture.play()
