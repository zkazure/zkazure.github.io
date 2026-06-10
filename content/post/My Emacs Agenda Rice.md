+++
title = "My Emacs Agenda Rice"
author = ["Kazure Zheng"]
date = 2025-12-21T00:00:00+08:00
tags = ["emacs", "org", "blog"]
draft = false
+++

## Preface {#preface}

As an INTJ, I really wanna to rigorous in my goals and life schedule.
So I tries to use org agenda to arrange it.


## UI {#ui}

It will be much better to keep track of your schedule and current time
with a time gird string.

```elisp
(customize-set-variable 'org-agenda-time-grid
                        '((today require-timed remove-match)
                          (0700 1200 2400)
                          ":  " "┈┈┈┈┈┈┈┈┈┈┈┈┈"))
(customize-set-variable 'org-agenda-current-time-string "ᐊ┈┈┈┈┈┈┈┈ now")
```


## Customized view {#customized-view}

Inspire by [macowners](https://macowners.club/) in this [post](https://macowners.club/posts/personal-touch-org-agenda/).


### today and future schedule {#today-and-future-schedule}

```elisp
(agenda ""
        ((org-agenda-overriding-header
          (concat "TODAY (W" (format-time-string "%V") ")"))
         (org-agenda-span 'day)
         (org-agenda-sorting-strategy
          '((agenda time-up priority-down category-keep)))
         (org-agenda-show-log t)
         (org-agenda-log-mode-items '(clock))))
(agenda ""
        ((org-agenda-overriding-header
          (concat "FOLLOWING DAYS (W" (format-time-string "%V") ")"))
         (org-agenda-skip-function
          '(org-agenda-skip-entry-if 'unscheduled))
         (org-agenda-span 6)
         (org-agenda-start-day "+1d")
         (org-agenda-start-on-weekday nil)))
```


### completed {#completed}

This makes me satisfied of myself.

```elisp
(tags "CLOSED>=\"<-7d>\"|DONE>=\"<-7d>\"|CANCELLED>=\"<-7d>\""
      ((org-agenda-overriding-header "Completed in the Last 7 Days\n")))
```


### all to-do {#all-to-do}

I have hundreds of and thousands of things to do, I wanna keep track of
them and pick up one day to finish.

```elisp
(alltodo ""
         ((org-agenda-overriding-header "ALL TODO ITEMS")
          (org-agenda-skip-function
           '(org-agenda-skip-entry-if 'scheduled 'deadline))
          (org-agenda-sorting-strategy
           '(priority-down todo-state-up category-keep))
          ;; (org-agenda-show-outline-path t)
          ;; (org-outline-path-complete-in-steps t)
          (org-agenda-prefix-format "%l%i %s")
          (org-agenda-show-inherited-tags nil)
          ))
```


### overview {#overview}

```elisp
(add-to-list
 'org-agenda-custom-commands
 '("d" "Daily Action"
   (
    (agenda ""
            ((org-agenda-overriding-header
              (concat "TODAY (W" (format-time-string "%V") ")"))
             (org-agenda-span 'day)
             (org-agenda-sorting-strategy
              '((agenda time-up priority-down category-keep)))
             (org-agenda-show-log t)
             (org-agenda-log-mode-items '(clock))))
    (agenda ""
            ((org-agenda-overriding-header
              (concat "FOLLOWING DAYS (W" (format-time-string "%V") ")"))
             (org-agenda-skip-function
              '(org-agenda-skip-entry-if 'unscheduled))
             (org-agenda-span 6)
             (org-agenda-start-day "+1d")
             (org-agenda-start-on-weekday nil)))
    (tags "CLOSED>=\"<-7d>\"|DONE>=\"<-7d>\"|CANCELLED>=\"<-7d>\""
          ((org-agenda-overriding-header "Completed in the Last 7 Days\n")))
    (alltodo ""
             ((org-agenda-overriding-header "ALL TODO ITEMS")
              (org-agenda-skip-function
               '(org-agenda-skip-entry-if 'scheduled 'deadline))
              (org-agenda-sorting-strategy
               '(priority-down todo-state-up category-keep))
              ;; (org-agenda-show-outline-path t)
              ;; (org-outline-path-complete-in-steps t)
              (org-agenda-prefix-format "%l%i %s")
              (org-agenda-show-inherited-tags nil)
              ))
    )))
```


## Cooperate with roam {#cooperate-with-roam}

In my org roam files, I always leave something to be done in the future.
It is important to keep track of them, instead of spreading them everywhere.
Following codes are come from author of org roam, if I remember correctly.

It will add a `todo` tag, if there is a **TODO** heading in your file.
Then add files path with `todo` tag to `org-agenda-files`.
When you finish all **TODO** in your files, it will also remove `todo` tag
automatically.

```elisp
(defun vulpea-todo-p ()
  "Return non-nil if current buffer has any todo entry.
  TODO entries marked as done are ignored, meaning the this
  function returns nil if current buffer contains only completed
  tasks."
  (seq-find                                 ; (3)
   (lambda (type)
     (eq type 'todo))
   (org-element-map                         ; (2)
       (org-element-parse-buffer 'headline) ; (1)
       'headline
     (lambda (h)
       (org-element-property :todo-type h)))))

(defun vulpea-todo-update-tag ()
  "Update TODO tag in the current buffer."
  (when (and (not (active-minibuffer-window))
             (vulpea-buffer-p))
    (save-excursion
      (goto-char (point-min))
      (let* ((tags (vulpea-buffer-tags-get))
             (original-tags tags))
        (if (vulpea-todo-p)
            (setq tags (cons "todo" tags))
          (setq tags (remove "todo" tags)))

        ;; cleanup duplicates
        (setq tags (seq-uniq tags))

        ;; update tags if changed
        (when (or (seq-difference tags original-tags)
                  (seq-difference original-tags tags))
          (apply #'vulpea-buffer-tags-set tags))))))

(defun vulpea-buffer-p ()
  "Return non-nil if the currently visited buffer is a note."
  (and buffer-file-name
       (string-prefix-p
        (expand-file-name (file-name-as-directory org-roam-directory))
        (file-name-directory buffer-file-name))))

(defun vulpea-todo-files ()
  "Return a list of note files containing 'todo' tag." ;
  (seq-uniq
   (seq-map
    #'car
    (org-roam-db-query
     [:select [nodes:file]
              :from tags
              :left-join nodes
              :on (= tags:node-id nodes:id)
              :where (like tag (quote "%\"todo\"%"))]))))


(defun vulpea-agenda-files-update (&rest _)
  "Update `org-agenda-files' by merging with current files.
  This function accepts any number of arguments, as required by advice."
  (let ((custom-agenda-files '("~/Documents/org/")))
    (setq org-agenda-files
          (seq-uniq
           (append custom-agenda-files
                   (vulpea-todo-files))))))

(add-hook 'find-file-hook #'vulpea-todo-update-tag)
(add-hook 'before-save-hook #'vulpea-todo-update-tag)

(advice-add 'org-agenda :before #'vulpea-agenda-files-update)
(advice-add 'org-todo-list :before #'vulpea-agenda-files-update)

;; functions borrowed from `vulpea' library
;; https://github.com/d12frosted/vulpea/blob/6a735c34f1f64e1f70da77989e9ce8da7864e5ff/vulpea-buffer.el
(defun vulpea-buffer-tags-get ()
  "Return filetags value in current buffer."
  (vulpea-buffer-prop-get-list "filetags" "[ :]"))

(defun vulpea-buffer-tags-set (&rest tags)
  "Set TAGS in current buffer.
  If filetags value is already set, replace it."
  (if tags
      (vulpea-buffer-prop-set
       "filetags" (concat ":" (string-join tags ":") ":"))
    (vulpea-buffer-prop-remove "filetags")))

(defun vulpea-buffer-tags-add (tag)
  "Add a TAG to filetags in current buffer."
  (let* ((tags (vulpea-buffer-tags-get))
         (tags (append tags (list tag))))
    (apply #'vulpea-buffer-tags-set tags)))

(defun vulpea-buffer-tags-remove (tag)
  "Remove a TAG from filetags in current buffer."
  (let* ((tags (vulpea-buffer-tags-get))l
         (tags (delete tag tags)))
    (apply #'vulpea-buffer-tags-set tags)))

(defun vulpea-buffer-prop-set (name value)
  "Set a file property called NAME to VALUE in buffer file.
  If the property is already set, replace its value."
  (setq name (downcase name))
  (org-with-point-at 1
    (let ((case-fold-search t))
      (if (re-search-forward (concat "^#\\+" name ":\\(.*\\)")
                             (point-max) t)
          (replace-match (concat "#+" name ": " value) 'fixedcase)
        (while (and (not (eobp))
                    (looking-at "^[#:]"))
          (if (save-excursion (end-of-line) (eobp))
              (progn
                (end-of-line)
                (insert "\n"))
            (forward-line)
            (beginning-of-line)))
        (insert "#+" name ": " value "\n")))))

(defun vulpea-buffer-prop-set-list (name values &optional separators)
  "Set a file property called NAME to VALUES in current buffer.
  VALUES are quoted and combined into single string using
  `combine-and-quote-strings'.
  If SEPARATORS is non-nil, it should be a regular expression
  matching text that separates, but is not part of, the substrings.
  If nil it defaults to `split-string-default-separators', normally
  \"[ \f\t\n\r\v]+\", and OMIT-NULLS is forced to t.
  If the property is already set, replace its value."
  (vulpea-buffer-prop-set
   name (combine-and-quote-strings values separators)))

(defun vulpea-buffer-prop-get (name)
  "Get a buffer property called NAME as a string."
  (org-with-point-at 1
    (when (re-search-forward (concat "^#\\+" name ": \\(.*\\)")
                             (point-max) t)
      (buffer-substring-no-properties
       (match-beginning 1)
       (match-end 1)))))

(defun vulpea-buffer-prop-get-list (name &optional separators)
  "Get a buffer property NAME as a list using SEPARATORS.
  If SEPARATORS is non-nil, it should be a regular expression
  matching text that separates, but is not part of, the substrings.
  If nil it defaults to `split-string-default-separators', normally
  \"[ \f\t\n\r\v]+\", and OMIT-NULLS is forced to t."
  (let ((value (vulpea-buffer-prop-get name)))
    (when (and value (not (string-empty-p value)))
      (split-string-and-unquote value separators))))

(defun vulpea-buffer-prop-remove (name)
  "Remove a buffer property called NAME."
  (org-with-point-at 1
    (when (re-search-forward (concat "\\(^#\\+" name ":.*\n?\\)")
                             (point-max) t)
      (replace-match ""))))
```
