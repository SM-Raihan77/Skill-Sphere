
"use client";

import { Switch, useTheme } from '@heroui/react';
import React from 'react';

import {Moon, Sun} from "@gravity-ui/icons";



const ThemeSwitch = () => {
      const { theme, setTheme } = useTheme();
    return (
       <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-[25px] w-[40px] bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-3 text-cyan-600" />
                ) : (
                  <Moon className="size-3 text-blue-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
    );
};

export default ThemeSwitch;