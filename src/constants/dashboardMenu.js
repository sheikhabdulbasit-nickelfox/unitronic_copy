// Export all routes that should be in the side menu
import React from "react";
import HomeIcon from "@local/assets/icons/homeIcon";
import CableIcon from "@local/assets/icons/cable.jsx";
import SpeakerIcon from "@local/assets/icons/speakerIcon";
import BoxIcon from "@local/assets/icons/carbonBox";
import FilesIcon from "@local/assets/icons/files";
import HammerIcon from "@local/assets/icons/hammer";
import PlugIcon from "@local/assets/icons/plug";
import ProfileIcon from "@local/assets/icons/profile";
class MenuPath {
  constructor(title, icon, route, alias = null) {
    this.title = title;
    this.icon = icon;
    this.route = route;
    this.alias = alias || title.replace(" ", "_").toLowerCase();
  }
}

export const DashboardMenus = [
  new MenuPath("Home", HomeIcon, "/home"),
  new MenuPath("Orders", BoxIcon, "/orders"),
  new MenuPath("Tuned Files", FilesIcon, "/tuned-files"),
  new MenuPath("Hardware", HammerIcon, "/hardware"),
  new MenuPath("Marketing", SpeakerIcon, "/marketing"),
  new MenuPath("Cables", CableIcon, "/cables"),
  new MenuPath("Uniflex", PlugIcon, "/uniflex"),
  new MenuPath("My Account", ProfileIcon, "/my-account"),
];
