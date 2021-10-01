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
			scene.add( cube );

			camera.position.z = 3;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.06;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();

         