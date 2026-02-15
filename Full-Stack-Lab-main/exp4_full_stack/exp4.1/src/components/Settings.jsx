import React from 'react';
import { useAppContext } from '../context/AppContext';

const Settings = () => {
  const { settings, updateSettings } = useAppContext();

  const handleNotificationToggle = () => {
    updateSettings({ notifications: !settings.notifications });
  };

  const handleLanguageChange = (e) => {
    updateSettings({ language: e.target.value });
  };

  const handleFontSizeChange = (e) => {
    updateSettings({ fontSize: e.target.value });
  };

  return (
    <div className="settings">
      <h3>Application Settings</h3>
      
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={handleNotificationToggle}
          />
          Enable Notifications
        </label>
      </div>

      <div className="setting-item">
        <label>
          Language:
          <select value={settings.language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </label>
      </div>

      <div className="setting-item">
        <label>
          Font Size:
          <select value={settings.fontSize} onChange={handleFontSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>

      <div className="settings-display">
        <h4>Current Settings:</h4>
        <ul>
          <li>Notifications: {settings.notifications ? 'On' : 'Off'}</li>
          <li>Language: {settings.language}</li>
          <li>Font Size: {settings.fontSize}</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
