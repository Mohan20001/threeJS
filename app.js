const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

            document.body.onresize=function () {
                renrenderer.setSize( window.innerWidth, window.innerHeight );
            }

			const geometry = new THREE.BoxGeometry(1,1,0);
			const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
			const cube = new THREE.Mesh( geometry, material );
	

			const geometryb = new THREE.BoxGeometry(0.5,0.5,0.5);
			const materialb = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
			const cubeB = new THREE.Mesh( geometryb, materialb );
			

			const geometryc = new THREE.BoxGeometry(0.5,0.5,0.5);
			const materialc = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
			const cubec = new THREE.Mesh( geometryc, materialc );
			
			scene.add(cubeB);
			scene.add( cube );
			scene.add(cubec);
             
			camera.position.z = 3;
   cubeB.position.y = 1.5;
   cubec.position.y = -1.5;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.06;
				cube.rotation.y += 0.01;
				cubeB.rotation.x += 0.06;
				cubeB.rotation.z += 0.01;

				cubec.rotation.y += 0.01;
				cubec.rotation.x += 0.06;
				

				renderer.render( scene, camera );
			};

			animate();

         