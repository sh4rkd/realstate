import React from 'react';
import profileImage from '../assets/avatars/profile.jpeg';
import logoutIcon from '../assets/sidebar/logout.svg';
import helpIcon from '../assets/sidebar/help.svg';
import dashboardIcon from '../assets/sidebar/dashboard.svg';
import discoverIcon from '../assets/sidebar/discover.svg';
import inboxIcon from '../assets/sidebar/inbox.svg';
import walletIcon from '../assets/sidebar/wallet.svg';
import analyticsIcon from '../assets/sidebar/analytics.svg';
import notificationsIcon from '../assets/sidebar/notifications.svg';
import settingsIcon from '../assets/sidebar/settings.svg';

type IconName = 'dashboard' | 'discover' | 'inbox' | 'wallet' | 'analytics' | 'notifications' | 'settings';

const iconMap: Record<IconName, string> = {
  dashboard: dashboardIcon,
  discover: discoverIcon,
  inbox: inboxIcon,
  wallet: walletIcon,
  analytics: analyticsIcon,
  notifications: notificationsIcon,
  settings: settingsIcon,
};

interface MenuItem {
  icon: IconName;
  label: string;
  active?: boolean;
  notifications?: number;
}

const menuItems: MenuItem[] = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'discover', label: 'Discover' },
  { icon: 'inbox', label: 'Inbox', notifications: 3 },
  { icon: 'wallet', label: 'My Wallet' },
  { icon: 'analytics', label: 'Analytics' },
  { icon: 'notifications', label: 'Notifications', notifications: 6 },
  { icon: 'settings', label: 'Settings' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen p-4 font-inter">
      <div className="bg-stone-950 text-white px-4 py-6 flex flex-col h-full rounded-[20px] shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-bold text-base text-lg">Indica Watson</h2>
          <p className="text-xs text-gray-500">Real Estate Builders</p>
        </div>
        <nav className="flex-grow">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center py-2 px-3 rounded-lg mb-1 relative ${
                item.active ? 'text-white bg-black' : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <span className="mr-3">
                <img src={iconMap[item.icon]} alt={item.label} className="w-4 h-4" />
              </span>
              <span className="text-xs">{item.label}</span>
              {item.notifications && (
                <span className={`ml-auto ${item.label === 'Inbox' ? 'bg-orange-500' : 'bg-green-500'} text-white text-[10px] rounded-full px-1.5 py-0.5`}>
                  {item.notifications}
                </span>
              )}
              {item.active && (
                <span className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l"></span>
              )}
            </a>
          ))}
        </nav>
        <div className="mt-auto">
          <a href="#" className="text-gray-400 flex items-center py-2 px-3 rounded-lg hover:bg-gray-800 mb-1 text-xs">
            <span className="mr-3">
              <img src={helpIcon} alt="Help & Support" className="w-4 h-4" />
            </span>
            <span>Help & Support</span>
          </a>
          <a href="#" className="text-red-500 flex items-center py-2 px-3 rounded-lg hover:bg-gray-800 text-xs">
            <span className="mr-3">
              <img src={logoutIcon} alt="Logout" className="w-4 h-4" />
            </span>
            <span>Log Out</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;