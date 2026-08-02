import { IconType } from 'react-icons';
import { FaAward, FaTrophy } from 'react-icons/fa';
import { MdKeyboard, MdSchool } from 'react-icons/md';

/**
 * data の logo で `icon:` プレフィックス付きで指定できる react-icons の対応表。
 * SVG ロゴが存在しない汎用アイコン用
 */
export const iconRegistry: Record<string, IconType> = {
  'icon:keyboard': MdKeyboard,
  'icon:school': MdSchool,
  'icon:award': FaAward,
  'icon:trophy': FaTrophy,
};
