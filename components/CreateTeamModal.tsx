import React, { useState } from 'react';
import { Team } from '@/models/Team';

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
    category: '',
    status: '',
    role: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTeam({ ...newTeam, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newTeam);
    onClose();
  };

  if (!isOpen) return null; // Don't render anything if the modal is closed

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
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              value={newTeam.category}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Status</label>
            <select
              name="status"
              value={newTeam.status}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="Активная">Активная</option>
              <option value="В архиве">В архиве</option>
            </select>
          </div>
          <div>
            <label className="label">Role</label>
            <input
              type="text"
              name="role"
              value={newTeam.role}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              value={newTeam.image}
              onChange={handleChange}
              className="input input-bordered w-full"
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