'use client'
import React, { useEffect, useState } from 'react';
import { Team } from '@/models/Team';
import { createTeam } from '@/utils/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface CreateTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (team: Team) => void;
}



const CreateTeamModal2: React.FC<CreateTeamModalProps> = ({ isOpen, onClose, onSave }) => {
  const [newTeam, setNewTeam] = useState<Team>({
    id: Date.now(),
    name: '',
    description: '',
    status: 'ACTIVE',
    type: 'SHORT_TERM',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTeam({ ...newTeam, [name]: value });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      type: 'SHORT_TERM',
      status: 'ACTIVE',
      image: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      description: Yup.string(),
      type: Yup.string().required('Type is required'),
      status: Yup.string().required('Status is required'),
      image: Yup.string().url('Must be a valid URL').nullable(),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      onSave(newTeam);
      console.log(newTeam);
      createTeam(newTeam);
      onClose();
    },
  });

  useEffect(() => {
    const postTeam = async () => {
      try {
        const data = await createTeam(newTeam);
      } catch (err) {
       // setError(err instanceof Error ? err.message : 'An error occurred');
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create New Team</h3>
        <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
      <div>
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="input input-bordered w-full"
          required
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label className="label">Description</label>
        <input
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label className="label">Type</label>
        <select
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="select select-bordered w-full"
        >
          <option value="SHORT_TERM">Кратковременная</option>
          <option value="LONG_TERM">Долговременная</option>
          <option value="DEPARTMENT">Департамент</option>
          <option value="TRAINING">Учебная</option>
        </select>
        {formik.touched.type && formik.errors.type ? (
          <div className="text-red-500">{formik.errors.type}</div>
        ) : null}
      </div>

      <div>
        <label className="label">Status</label>
        <select
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="select select-bordered w-full"
        >
          <option value="ACTIVE">Активная</option>
          <option value="INACTIVE">В архиве</option>
        </select>
        {formik.touched.status && formik.errors.status ? (
          <div className="text-red-500">{formik.errors.status}</div>
        ) : null}
      </div>

      <div>
        <label className="label">Image URL</label>
        <input
          type="text"
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="input input-bordered w-full"
          placeholder="https://cdn.worldvectorlogo.com/logos/it-2.svg"
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="text-red-500">{formik.errors.image}</div>
        ) : null}
      </div>

      <div className="modal-action">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </form>
      </div>
    </div>
  );
};

export default CreateTeamModal2;