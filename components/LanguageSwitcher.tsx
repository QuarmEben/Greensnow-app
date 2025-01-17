import { useState } from "react";
import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LanguageDropdownProps, LanguageSwitcherProps } from "./types";
import { LanguageIconProps } from "./types";

import tw from "twrnc";

var defaultLanguage = "EN";
var defaultIcon = require("../assets/images/flag-france.png");


export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  icon,
}) => {

  

  const languages = [
    {language: "EN", flag: require("../assets/images/flag-france.png")},
    {language: "FR", flag: require("../assets/images/flag-france.png")},
    {language: "ESP", flag: require("../assets/images/flag-france.png")},
    {language: "DE", flag: require("../assets/images/flag-france.png")},
  ]

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={tw`flex text-xs self-stretch text-center whitespace-nowrap max-w-[66px] w-66 text-zinc-600`}>
      <View style={tw`flex flex-rowgap-2.5 px-1.5 py-1.5 self-stretch bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
        <TouchableOpacity onPress={() => setIsOpen((prev)=>!prev)}>
        <View style={tw`flex flex-row items-center self-stretch gap-2`}>
          <View style={tw`grow`}>
            <Text style={tw`grow text-xs text-center whitespace-nowrap text-zinc-600`}>{defaultLanguage}</Text>
          </View>
          
            <LanguageIcon
              imageUrl={icon}
              alt={icon.alt}
            />
            <Image source={require("../assets/images/arrowdown.png")}/>
                
            
          
        </View>

        </TouchableOpacity>



        {/* dropdown menu implementation */}
        {  isOpen ?
        <View style={tw`absolute top-7 px-2 bg-white`}>
            {languages.map((language, index) => ( 
              <TouchableOpacity onPress={()=>{
                defaultLanguage = language.language;
                defaultIcon = language.flag;
                setIsOpen(false);
                }}>
              <LanguageDropdown key={index} flagIcon={language.flag} language={language.language} />
              </TouchableOpacity>
            ))}
        </View> :
        <View>
          </View>
        
      }





      </View>
    </View>
  );
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ imageUrl, alt }) => (
  <Image
    accessibilityLabel={alt}
    source={ defaultIcon }
    style={tw`object-contain shrink-0 self-start w-4 aspect-square`}
  />
);

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ language, flagIcon }) => (
  
  
  <View style={tw`flex flex-row w-full p-1 justify-between`}>
  <View>
    <Text>{language}</Text>
  </View>
  <Image 
  source={flagIcon}
  />
</View>
);