/// <reference path="../node_modules/@turbowarp/types/index.d.ts" />

import { VirtualMachine } from "src/def/VM"

interface MessageObject {
  id?: string
  default: string
  description?: string
}

type Message = string | MessageObject

interface TranslateFn {
  (message: Message): string
  setup(newTranslations: Record<string, Record<string, string>>): void
  language: string
}

declare namespace Scratch {
  const translate: TranslateFn
  const vm: VirtualMachine
}
