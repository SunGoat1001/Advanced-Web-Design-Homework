import React, { useEffect, useState } from 'react';
import API from '../api';
import { Form, Button } from 'react-bootstrap';

export default function ProductForm({ onSaved, editing, setEditing }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (editing) {
            setName(editing.name); setPrice(editing.price);
        }
    }, [editing]);

    async function submit(e) {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', name);
    }
}
