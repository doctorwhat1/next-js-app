'use client'
import React, { useEffect, useState } from 'react';
import { Team } from '@/models/Team';
import { createTeam } from '@/utils/api';


interface CreateTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (team: Team) => void;
}



const CreateTeamModal: React.FC<CreateTeamModalProps> = ({ isOpen, onClose, onSave }) => {
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

  

  useEffect(() => {
    const postTeam = async () => {
      try {
        const data = await createTeam(newTeam);
      } catch (err) {
       // setError(err instanceof Error ? err.message : 'An error occurred');
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newTeam);
    console.log(newTeam);
    createTeam(newTeam);
    //if (error) return <div>Error: {error}</div>;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create New Team</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={newTeam.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              value={newTeam.description}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
          <label className="label">Type</label>
            <select
              name="type"
              value={newTeam.type}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="SHORT_TERM">Кратковременная</option>
              <option value="LONG_TERM">Долговременная</option>
              <option value="DEPARTMENT">Департамент</option>
              <option value="TRAINING">Учебная</option>
            </select>
          </div>
          <div>
            <label className="label">Status</label>
            <select
              name="status"
              value={newTeam.status}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="ACTIVE">Активная</option>
              <option value="INACTIVE">В архиве</option>
            </select>
          </div>
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              value={newTeam.image}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="https://cdn.worldvectorlogo.com/logos/it-2.svg"
            />
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

export default CreateTeamModal;