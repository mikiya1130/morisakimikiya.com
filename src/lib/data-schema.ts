import { z } from 'zod';
import { parseContent } from '@/lib/content';
import { iconRegistry } from '@/lib/icon-registry';

/** content 文字列（限定記法）。パースできない記法はビルド時にエラーにする */
const contentSchema = z.string().superRefine((value, ctx) => {
  try {
    parseContent(value);
  } catch (error) {
    ctx.addIssue({
      code: 'custom',
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

/** logo 指定。SVG slug（`public/logos/{slug}.svg`）または `icon:` 付きレジストリキー */
const logoSchema = z.string().superRefine((value, ctx) => {
  if (value.startsWith('icon:') && !(value in iconRegistry)) {
    ctx.addIssue({ code: 'custom', message: `未登録のアイコンキーです: "${value}"` });
  }
});

const skillItemSchema = z.strictObject({
  title: z.union([z.string(), z.array(z.string()).nonempty()]),
  logo: z.union([logoSchema, z.array(logoSchema).nonempty()]),
  star: z
    .number()
    .min(0)
    .max(5)
    .refine((value) => Number.isInteger(value * 2), { message: '星は 0.5 刻みで指定します' }),
  content: contentSchema,
  wordBreak: z.literal('keep-all').optional(),
});

/** 各セクション YAML 共通のメタ情報（表示見出しと任意の注記） */
const sectionMetaShape = {
  section: z.string(),
  note: z.string().optional(),
};

const skillGroupSchema = z.strictObject({
  name: z.string(),
  cols: z.union([z.literal(2), z.literal(3)]).default(3),
  items: z.array(skillItemSchema),
});

export const skillDataSchema = z.strictObject({
  ...sectionMetaShape,
  groups: z.array(skillGroupSchema),
});

/** SKILL 欄の 1 項目 */
export type SkillItem = z.infer<typeof skillItemSchema>;

/** SKILL 欄の 1 グループ（表示名・列数・項目） */
export type SkillGroupData = z.infer<typeof skillGroupSchema>;

/** SKILL 欄全体（グループの表示順の配列） */
export type SkillData = z.infer<typeof skillDataSchema>;

const historyRowSchema = z.strictObject({
  period: z.string(),
  value: contentSchema,
});

const profileValueSchema = z.union([contentSchema, z.array(historyRowSchema).nonempty()]);

export const profileDataSchema = z.strictObject({
  ...sectionMetaShape,
  personalHistory: z.record(z.string(), profileValueSchema),
  exPersonalHistory: z.record(z.string(), contentSchema),
});

/** PROFILE 欄の 1 項目の値（単純テキスト or 期間付き履歴の配列） */
export type ProfileValue = z.infer<typeof profileValueSchema>;

/** PROFILE 欄全体 */
export type ProfileData = z.infer<typeof profileDataSchema>;

export const siteDataSchema = z.strictObject({
  title: z.string(),
  description: z.string(),
});

/** サイト全体のメタ情報（タイトル・概要） */
export type SiteData = z.infer<typeof siteDataSchema>;

const linkItemSchema = z.strictObject({
  title: z.string(),
  link: z.url(),
  content: contentSchema,
});

export const linkDataSchema = z.strictObject({
  ...sectionMetaShape,
  items: z.array(linkItemSchema),
});

/** LINK 欄の 1 項目 */
export type LinkItem = z.infer<typeof linkItemSchema>;

/** LINK 欄全体 */
export type LinkData = z.infer<typeof linkDataSchema>;
