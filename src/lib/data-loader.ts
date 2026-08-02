import { readFileSync } from 'fs';
import path from 'path';
import { parse } from 'yaml';
import {
  LinkData,
  linkDataSchema,
  ProfileData,
  profileDataSchema,
  SiteData,
  siteDataSchema,
  SkillData,
  skillDataSchema,
} from '@/lib/data-schema';

const dataDir = path.join(process.cwd(), 'src', 'data');

const loadYaml = (fileName: string): unknown =>
  parse(readFileSync(path.join(dataDir, fileName), 'utf-8'));

/**
 * サイト全体のメタ情報を YAML から読み込み、スキーマ検証して返す（ビルド時専用）
 */
export const loadSiteData = (): SiteData => siteDataSchema.parse(loadYaml('site.yaml'));

/**
 * PROFILE 欄のデータを YAML から読み込み、スキーマ検証して返す（ビルド時専用）
 */
export const loadProfileData = (): ProfileData => profileDataSchema.parse(loadYaml('profile.yaml'));

/**
 * SKILL 欄のデータを YAML から読み込み、スキーマ検証して返す（ビルド時専用）
 */
export const loadSkillData = (): SkillData => skillDataSchema.parse(loadYaml('skill.yaml'));

/**
 * LINK 欄のデータを YAML から読み込み、スキーマ検証して返す（ビルド時専用）
 */
export const loadLinkData = (): LinkData => linkDataSchema.parse(loadYaml('link.yaml'));
