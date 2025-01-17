import * as React from "react";
import { View, Text, Image } from "react-native";
import { LanguageSwitcherProps } from "./types";
import { LanguageIconProps } from "./types";

import tw from "twrnc";

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  icon,
}) => {
  return (
    <View style={tw`flex text-xs self-stretch text-center whitespace-nowrap max-w-[66px] w-66 text-zinc-600`}>
      <View style={tw`flex gap-2.5 px-1.5 py-1.5 self-stretch bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
        <View style={tw`flex flex-row items-center self-stretch gap-2`}>
          <View style={tw`grow`}>
            <Text style={tw`grow text-xs text-center whitespace-nowrap text-zinc-600`}>{currentLanguage}</Text>
          </View>
          
            <LanguageIcon
              imageUrl={icon}
              alt={icon.alt}
            />
            <Image source={require("../assets/images/arrowdown.png")}/>
                
            
          
        </View>
      </View>
    </View>
  );
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ imageUrl, alt }) => (
  <Image
    accessibilityLabel={alt}
    source={ imageUrl }
    style={tw`object-contain shrink-0 self-start w-4 aspect-square`}
  />
);