import { createContext, ReactNode, useContext, useState } from "react";
import Profile from "../../types/profiles";

interface ProfileProviderProps {
  children: ReactNode;
}

interface ProfileProviderData {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

const ProfileContext = createContext<ProfileProviderData>(
  {} as ProfileProviderData
);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [profile, setProfile] = useState<Profile>({
    gamer_tag: "user",
    id: "12345",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlW5ATT1jW3e6lwmykJri-0LCOZriL5W1bIYVRab_9w&s",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
