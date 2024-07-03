import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as THREE from 'three';
import CaseForm from './components/CaseForm';
import CaseList from './components/CaseList';

const App = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        axios.get('/cases').then(response => setCases(response.data));
    }, []);

    const deleteCase = id => {
      axios.delete(`/cases/${id}`).then(() => {
          setCases(cases.filter(c => c.id !== id));
      });
    };
    

    // Three.js rendering
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div>
            <CaseForm setCases={setCases} />
            <CaseList cases={cases} deleteCase={deleteCase} />
        </div>
    );
};

export default App;